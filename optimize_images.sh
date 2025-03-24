#!/bin/bash

# Create backup directory
mkdir -p backup_images

# Process all large Muralla images
for img in public/FORK\ FOREST\ 03:\ Muralla\ viva\ II/Territorio/Muralla*.jpg; do
  size=$(du -k "$img" | cut -f1)
  
  # Check if the image is larger than 2MB (2000KB)
  if [ $size -gt 2000 ]; then
    base_name=$(basename "$img")
    # Create a backup of the original image
    cp "$img" "backup_images/$base_name"
    echo "Optimizing $img ($(du -h "$img" | cut -f1))"
    
    # Compress the image with high quality (85%)
    convert "$img" -strip -quality 85% -resize 2000x2000\> "$img"
    
    echo "  → Reduced to $(du -h "$img" | cut -f1)"
  fi
done

echo "Done! Optimized images and created backups in backup_images/"
