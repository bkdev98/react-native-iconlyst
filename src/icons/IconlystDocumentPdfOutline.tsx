import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPdfOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M20.082 13.702a.75.75 0 0 1-.75-.75v-3.79c0-.35-.134-.688-.377-.94l-3.894-4.055a1.36 1.36 0 0 0-.977-.417H8.268a3.113 3.113 0 0 0-3.1 3.023v6.18a.75.75 0 1 1-1.5 0v-6.2a4.624 4.624 0 0 1 4.6-4.507h5.818a2.87 2.87 0 0 1 2.059.877l3.894 4.056a2.84 2.84 0 0 1 .795 1.978v3.791a.75.75 0 0 1-.752.754"
    />
    <Path
      fill={props.color}
      d="M20.014 9.416h-2.813a3.38 3.38 0 0 1-3.373-3.379v-2.97a.75.75 0 1 1 1.5 0v2.97a1.88 1.88 0 0 0 1.875 1.88h2.811a.75.75 0 0 1 0 1.5M4.664 21.747a.75.75 0 0 1-.75-.75v-4.615a.75.75 0 0 1 .75-.75h1.4a2.301 2.301 0 1 1 0 4.593h-.647v.772a.75.75 0 0 1-.753.75m.75-3.022h.647a.8.8 0 1 0 0-1.593h-.647zM17.574 21.755a.75.75 0 0 1-.75-.75v-4.626a.75.75 0 0 1 .75-.75h2.506a.75.75 0 1 1 0 1.5h-1.756v1.2h1.371a.75.75 0 1 1 0 1.5h-1.37v1.175a.75.75 0 0 1-.75.75M11.904 21.755H10.75a.75.75 0 0 1-.75-.75v-4.626a.75.75 0 0 1 .75-.75h1.156a3.062 3.062 0 1 1 0 6.126zm-.406-1.5h.406a1.563 1.563 0 0 0 0-3.126h-.406z"
    />
  </Svg>
);
export default IconlystDocumentPdfOutline;
