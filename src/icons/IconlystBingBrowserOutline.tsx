import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBingBrowserOutline = ({
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
      d="M4.172 3.506c0-.817.768-1.416 1.56-1.218l3.034.758c.559.14.95.642.95 1.218v11.537l3.64-1.82-.472-.236a1.25 1.25 0 0 1-.657-.818l-.742-2.97a1.256 1.256 0 0 1 1.563-1.512l5.87 1.677c.539.154.91.647.91 1.207v4.362c0 .476-.268.91-.694 1.123l-9.606 4.803c-.353.177-.77.177-1.123 0l-3.539-1.77a1.26 1.26 0 0 1-.694-1.122zm1.5.313v14.755l3.295 1.647 9.361-4.68v-4.027l-5.285-1.51.612 2.45 1.714.856a.75.75 0 0 1 0 1.342l-5.335 2.668a1.256 1.256 0 0 1-1.817-1.123V4.455z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBingBrowserOutline;
