import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkSearchBold = ({
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
      d="M9.823 9.595c0-.96.78-1.741 1.742-1.741.96 0 1.74.781 1.74 1.741s-.78 1.742-1.74 1.742a1.744 1.744 0 0 1-1.742-1.742"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.651 21.5a1.38 1.38 0 0 1-1.383-1.384V6.415c0-2.488 1.74-3.915 4.772-3.915h5.917c3.075 0 4.77 1.451 4.77 4.086l.005 13.526c0 .237-.062.472-.179.68a1.37 1.37 0 0 1-.833.652c-.357.101-.73.054-1.052-.128l-5.643-3.186-5.697 3.193a1.4 1.4 0 0 1-.677.177m8.334-8.297a.75.75 0 0 0 1.06-.001.75.75 0 0 0 0-1.061l-.77-.769a3.22 3.22 0 0 0 .53-1.777 3.245 3.245 0 0 0-3.24-3.241 3.245 3.245 0 0 0-3.242 3.241 3.246 3.246 0 0 0 3.242 3.242c.59 0 1.143-.158 1.619-.434z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkSearchBold;
