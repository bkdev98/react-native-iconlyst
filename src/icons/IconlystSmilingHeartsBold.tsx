import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingHeartsBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.49 15.52c-.15-.05-.32-.08-.48-.08-.2 0-.4.04-.59.12-.13.05-.24.12-.35.2-.28-.21-.62-.32-.95-.32-.16 0-.33.03-.48.08-.93.29-1.26 1.3-.98 2.18.44 1.4 2.41 2.48 2.41 2.48s1.42-.77 2.11-1.89c.13-.19.22-.38.29-.59.28-.88-.05-1.89-.98-2.18M21.065 17.395a1.205 1.205 0 0 0-.853.032 1.2 1.2 0 0 0-.279.159 1.28 1.28 0 0 0-.758-.255c-.127 0-.263.024-.382.064-.742.23-1.005 1.035-.782 1.738.351 1.116 1.922 1.977 1.922 1.977s1.132-.613 1.682-1.508c.104-.15.176-.302.231-.47.224-.702-.04-1.507-.78-1.738M21.36 2.959a1.52 1.52 0 0 0-1.071.04c-.13.05-.24.12-.35.2-.28-.21-.622-.32-.952-.32-.16 0-.33.03-.48.08-.93.29-1.26 1.3-.98 2.18.44 1.403 2.411 2.483 2.411 2.483s1.421-.77 2.111-1.891c.131-.19.22-.38.29-.591.281-.88-.05-1.891-.98-2.181"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.846 16.122c-.47-.13-.97-.12-1.436.028-1.39.45-2.1 1.94-1.63 3.39q.042.125.09.245a.31.31 0 0 1-.14.399 9 9 0 0 1-4 .936 8.92 8.92 0 0 1-5.357-1.778.305.305 0 0 1-.068-.406A3.7 3.7 0 0 0 7.7 18.1c.53-1.65-.26-3.32-1.81-3.82-.28-.09-.58-.14-.88-.14-.154 0-.496.052-.742.092a.297.297 0 0 1-.341-.227 9 9 0 0 1-.197-1.885c0-4.96 4.04-9 9-9 1.15 0 2.249.215 3.256.614.136.054.207.2.185.344-.071.47-.032.97.129 1.462.57 1.84 2.76 3.08 3.01 3.22.2.1.41.16.63.16a1.4 1.4 0 0 0 .736-.23.294.294 0 0 1 .427.138 8.9 8.9 0 0 1 .627 3.292 8.9 8.9 0 0 1-.801 3.71c-.057.125-.193.189-.33.191-.19.003-.389.046-.566.1a.34.34 0 0 1-.187.001M8.26 9.56c-.26.33-.19.8.14 1.05s.8.19 1.05-.14c.07-.1.24-.26.49-.26s.42.16.49.26c.15.19.37.3.6.3.16 0 .32-.06.45-.16.33-.25.4-.72.14-1.05-.83-1.09-2.53-1.09-3.36 0m8.69 1.05c-.13.1-.29.16-.45.16-.23 0-.45-.11-.6-.3a.61.61 0 0 0-.49-.26c-.25 0-.42.16-.49.26-.26.33-.73.39-1.06.14a.747.747 0 0 1-.13-1.05c.83-1.09 2.53-1.09 3.36 0 .25.33.19.8-.14 1.05m-.74 4.34c-.87 1.13-2.13 1.78-3.48 1.78-1.34 0-2.6-.65-3.47-1.78a.75.75 0 0 1 1.19-.91c.58.75 1.41 1.19 2.28 1.19.88 0 1.71-.43 2.29-1.19a.749.749 0 1 1 1.19.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmilingHeartsBold;