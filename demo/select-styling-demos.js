import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class SelectStylingDemos extends DemoReadyEventEmitter(SelectDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <h3>Styling the template content</h3>
    <vaadin-demo-snippet id="select-list-box-custom-styling">
      <template preserve-content="">
        <style>
          vaadin-item {
            font-weight: bold;
          }
        </style>
        <vaadin-select label="Name">
          <template>
            <vaadin-list-box>
              <vaadin-item>Jose</vaadin-item>
              <vaadin-item>Manolo</vaadin-item>
              <vaadin-item>Pedro</vaadin-item>
            </vaadin-list-box>
          </template>
        </vaadin-select>
      </template>
    </vaadin-demo-snippet>


    <h3>Custom input field style</h3>
    <vaadin-demo-snippet id="select-list-box-custom-border">
      <template preserve-content="">
        <dom-module id="custom-select-border" theme-for="vaadin-select-text-field">
          <template>
            <style>
              :host([theme~="custom-border"]) [part="input-field"] {
                border: 1px solid black;
                background-color: white;
              }
            </style>
          </template>
        </dom-module>
        <vaadin-select label="Name" theme="custom-border">
          <template>
            <vaadin-list-box>
              <vaadin-item>Jose</vaadin-item>
              <vaadin-item>Manolo</vaadin-item>
              <vaadin-item>Pedro</vaadin-item>
            </vaadin-list-box>
          </template>
        </vaadin-select>
      </template>
    </vaadin-demo-snippet>

    <h3>Custom icon</h3>
    <vaadin-demo-snippet id="select-custom-icon">
      <template preserve-content="">
        <dom-module id="custom-select-icon" theme-for="vaadin-select">
          <template>
            <style>
              :host([theme~="custom-icon"]) [part="toggle-button"]::before {
                content: var(--lumo-icons-arrow-down);
              }
            </style>
          </template>
        </dom-module>
        <vaadin-select label="Name" theme="custom-icon">
          <template>
            <vaadin-list-box>
              <vaadin-item>Jose</vaadin-item>
              <vaadin-item>Manolo</vaadin-item>
              <vaadin-item>Pedro</vaadin-item>
            </vaadin-list-box>
          </template>
        </vaadin-select>
      </template>
    </vaadin-demo-snippet>


    <h3>Custom overlay style</h3>
    <vaadin-demo-snippet id="select-theme-variants-demos-custom">
      <template preserve-content="">
        <dom-module id="custom-select-font-style" theme-for="vaadin-item">
          <template>
            <style>
              :host([theme~="custom"]) {
                font-family: monospace;
              }
            </style>
          </template>
        </dom-module>
        <dom-module id="custom-select-overlay-font-style" theme-for="vaadin-select-overlay">
          <template>
            <style>
              :host([theme~="custom"]) [part~="overlay"] {
                background: linear-gradient(hsla(214, 61%, 25%, 0.05), hsla(214, 61%, 25%, 0.05)) #fff;
              }
            </style>
          </template>
        </dom-module>
        <vaadin-select label="Name" theme="custom">
          <template>
            <vaadin-list-box>
              <vaadin-item theme="custom">Jose</vaadin-item>
              <vaadin-item theme="custom">Manolo</vaadin-item>
              <vaadin-item theme="custom">Pedro</vaadin-item>
            </vaadin-list-box>
          </template>
        </vaadin-select>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'select-styling-demos';
  }
}
customElements.define(SelectStylingDemos.is, SelectStylingDemos);
