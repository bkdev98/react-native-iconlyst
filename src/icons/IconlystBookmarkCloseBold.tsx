import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkCloseBold = ({
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
      d="M5.651 21.5a1.38 1.38 0 0 1-1.383-1.384V6.415c0-2.488 1.74-3.915 4.772-3.915h5.917c3.075 0 4.77 1.451 4.77 4.086l.005 13.526c0 .237-.062.472-.179.68a1.37 1.37 0 0 1-.833.652c-.357.101-.73.054-1.052-.128l-5.643-3.186-5.697 3.193a1.4 1.4 0 0 1-.677.177m7.796-8.523c.146.147.338.22.53.22a.749.749 0 0 0 .53-1.28L13.06 10.47l1.446-1.446a.749.749 0 1 0-1.06-1.06L12 9.41l-1.446-1.446a.749.749 0 1 0-1.06 1.06l1.446 1.446-1.446 1.447a.749.749 0 1 0 1.06 1.06L12 11.531z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkCloseBold;
