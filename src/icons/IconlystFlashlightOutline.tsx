import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashlightOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M9.138 15.81a.749.749 0 1 0-1.06-1.06l-1.135 1.14a.75.75 0 1 0 1.061 1.061z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.73 11.323a.74.74 0 0 1-.22.558l-.068.068-.018.02-.039.042-1.785 1.785-1.142 1.145a3.5 3.5 0 0 1-1.374.841q-.284.095-.579.139h-.01l-1.782.25-.013.003-.132.027a3 3 0 0 0-.225.059.8.8 0 0 1-.18.059c-.283.116-.543.289-.763.512l-3.499 3.5a4.481 4.481 0 1 1-6.338-6.34l3.5-3.5c.228-.224.404-.495.52-.792a.7.7 0 0 1 .052-.148 2 2 0 0 0 .083-.37l.254-1.78c.107-.75.45-1.44.982-1.97l3.052-3.05a.75.75 0 0 1 .552-.217c.284-.05.566-.012.788.037.452.11.956.34 1.47.63 1.036.61 2.268 1.58 3.465 2.78s2.173 2.43 2.776 3.47c.298.51.528 1.01.632 1.46a2.2 2.2 0 0 1 .051.704l-.007.052zM8.84 19.271a2.99 2.99 0 0 1-4.216 0 2.986 2.986 0 0 1 0-4.22l3.5-3.5q.129-.126.242-.264c.54.728 1.21 1.503 1.975 2.264.76.762 1.534 1.434 2.263 1.977q-.136.115-.264.243zm8.38-12.6c-1.133-1.13-2.262-2.02-3.158-2.54-.432-.248-.774-.396-1.016-.461.06.239.206.58.46 1.021.52.89 1.405 2.02 2.538 3.16 1.133 1.13 2.264 2.02 3.159 2.54.43.247.773.395 1.015.452-.062-.24-.208-.585-.458-1.012-.52-.9-1.406-2.03-2.54-3.16m-2.236 2.24c-1.198-1.2-2.173-2.43-2.776-3.47a7 7 0 0 1-.387-.755l-1.806 1.805-.001.01c-.3.3-.496.69-.557 1.11l-.254 1.78q-.027.188-.072.372c.538.814 1.314 1.77 2.271 2.728.953.958 1.907 1.74 2.722 2.274q.159-.04.321-.066l.051-.008 1.785-.26q.216-.03.416-.105c.263-.101.502-.254.697-.445l1.315-1.315.495-.496a7 7 0 0 1-.754-.39c-1.037-.6-2.268-1.58-3.466-2.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashlightOutline;
