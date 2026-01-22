# 📝 Sistema de Contenido Editable - In Agencia

## ¿Qué es esto?
Esta carpeta contiene **TODO el contenido escrito** de las páginas del sitio web en formato YAML. Puedes editar estos archivos para cambiar textos sin tocar el código.

---

## 📁 Estructura de Archivos

| Archivo | Página | Descripción |
|---------|--------|-------------|
| `home.yaml` | Inicio | Hero, problema, solución, casos, garantías, proceso, CTAs |
| `servicios-ads.yaml` | /servicios/ads | Página de Ads de Performance |
| `servicios-automatizacion.yaml` | /servicios/automatizacion | Página de Automatización |
| `servicios-sistemas.yaml` | /servicios/sistemas | Página de Sistemas y Funnels |
| `nosotros.yaml` | /nosotros | Quiénes somos, valores, equipo, manifesto |
| `casos.yaml` | /casos | Página principal de casos de éxito |
| `caso-ecommerce-b2b.yaml` | /casos/ecommerce-b2b | Caso detallado B2B |
| `caso-seguros-usa.yaml` | /casos/seguros-usa | Caso detallado Seguros USA |
| `contacto.yaml` | /contacto | Intro, FAQs, datos de Calendly |

---

## ✏️ Cómo Editar Contenido

### 1. Abre el archivo YAML correspondiente
Por ejemplo, para editar la página de inicio, abre `home.yaml`

### 2. Modifica el texto
Los archivos usan formato YAML. Ejemplo:

```yaml
hero:
  title: "Generamos leads que se convierten en ventas"
  subtitle: "No likes. No 'alcance'. Dinero real."
```

Para cambiar el título, simplemente edita el texto entre comillas:

```yaml
hero:
  title: "Tu nuevo título aquí"
  subtitle: "Tu nueva descripción"
```

### 3. Guarda el archivo
Los cambios se reflejarán cuando el desarrollador los integre al código.

---

## ⚠️ Reglas Importantes

1. **No borres las claves** (las palabras antes de los dos puntos)
2. **Mantén las comillas** para textos largos
3. **Usa comillas simples** si el texto contiene comillas dobles
4. **Para múltiples líneas**, usa el formato:
   ```yaml
   description: |
     Línea 1 del texto.
     Línea 2 del texto.
     Línea 3 del texto.
   ```

---

## 🖼️ Añadir Imágenes/Videos (Casos de Estudio)

En los archivos de casos de estudio, hay secciones para media:

```yaml
media:
  video:
    # url: "/videos/mi-video.mp4"  # Descomentar y poner ruta
  
  gallery:
    images:
      - alt: "Descripción de la imagen"
        # src: "/images/casos/mi-imagen.jpg"  # Descomentar
```

Para activar una imagen/video:
1. Sube el archivo a `/public/images/casos/` o `/public/videos/`
2. Quita el `#` del principio de la línea
3. Actualiza la ruta con el nombre de tu archivo

---

## 🔧 Formato YAML - Guía Rápida

```yaml
# Esto es un comentario (ignorado)

texto_simple: "Hola mundo"

texto_con_comillas: 'Dijo "hola"'

texto_multilinea: |
  Primera línea
  Segunda línea

lista:
  - Elemento 1
  - Elemento 2
  - Elemento 3

objeto:
  propiedad1: "valor1"
  propiedad2: "valor2"
```

---

## 📞 ¿Necesitas Ayuda?

Si tienes dudas sobre cómo editar algún contenido, contacta al equipo de desarrollo.
