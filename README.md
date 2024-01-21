<div id="top" align="center">

# rz-onlinecheck

a Web Component to check on-/offline

shows online (green circle) or offline (red circle)

</div>

## Authors

- [@Zheng-Bote](https://www.github.com/Zheng-Bote)

## Version

v0.1.1

## License

[MIT](https://choosealicense.com/licenses/mit/)

## API Reference

#### Parameters

```
    <rz-onlinecheck></rz-onlinecheck>
```

```
    <rz-onlinecheck with_text="no"></rz-onlinecheck>
```

| Parameter   | Type     | Description                                                  |
| :---------- | :------- | :----------------------------------------------------------- |
| `with_text` | `string` | **Optional**. "yes" "no" default: "yes" ("Online" "Offline") |

## Installation

used folder structure

```bash
.
├── assets
│   ├── css
│   │   └── index.css
│   └── js
│       └── rz-online.js
├── favicon.ico
├── index.html


```

## Usage/Examples

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="ZHENG Robert" />

    <title>Web Component</title>

    <meta
      name="description"
      content="Web Component to check on-/offline mode"
    />
    <meta name="version" content="v0.1.1" />
    <meta name="author" content="ZHENG Robert" />
    <meta name="date" content="2021-03-17T01:30:00+01:00" />

    <link rel="alternate icon" href="/assets/favicon.ico" />
    <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />

    <link href="./assets/css/index.css" rel="stylesheet" type="text/css" />
  </head>

  <body id="body">
    <main>
      <h1>Web Component &raquo; data-onlinechecker &laquo;</h1>
      <article>
        <h2>A Web Component to check on-/offline</h2>
        <p class="brief">shows online (green circle) or offline (red circle)</p>
        <section>
          <h3>default</h3>
          <br />
          <p>
            <rz-onlinecheck></rz-onlinecheck>
          </p>
          <p>
            <br />
            <pre class="code">‹rz-onlinecheck›‹/rz-onlinecheck›</pre>
            <pre class="code">‹rz-onlinecheck with_text="yes"›‹/rz-onlinecheck›</pre>
          </p>
        </section>
        <section>
          <h3>no text</h3>
          <br />
          <p>
            <rz-onlinecheck with_text="no"></rz-onlinecheck>
          </p>
          <p>
            <br />
            <pre class="code">‹rz-onlinecheck with_text="no"›‹/rz-onlinecheck›</pre>
          </p>
        </section>
      </article>
    </main>
    <script src="./assets/js/rz-onlinecheck.js"></script>
  </body>
</html>
```

## Screenshots

**online**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/data-onlinechecker/main/assets/img/Screenshot_online.png" width="100%" height="auto" />

**offline**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/data-onlinechecker/main/assets/img/Screenshot_offline.png" width="100%" height="auto" />

## Used By

This web component is used by the following web sites:

- [hase-zheng.net: Micro-Frontends and Microservices](https://www.hase-zheng.net)
- [Robert Zheng Landing Page](https://www.robert.hase-zheng.net)

### the end

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
