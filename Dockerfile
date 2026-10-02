# ===========================================
# Ghadeer Alkhodr Portfolio — Production Image
# Multi-stage build: Nginx serving static files
# ===========================================

# Stage 1: Production
FROM nginx:1.27-alpine AS production

# Add metadata
LABEL maintainer="Ghadeer Alkhodr"
LABEL description="Portfolio website — DevOps Engineer"
LABEL version="1.0"

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx config
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy site files
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:80/health || exit 1

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
