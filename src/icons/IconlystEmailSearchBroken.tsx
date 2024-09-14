import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSearchBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.018 19.65H7.582C4.845 19.656 3 17.408 3 14.642V8.462c0-2.763 1.845-5.013 4.582-5.013h1.033M21 11.043V8.462c0-2.763-1.845-5.013-4.582-5.013H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.31 8.715-3.998 3.252a2.07 2.07 0 0 1-2.574 0L6.705 8.715M19.552 19.105 21 20.55m-3.406-6.429a2.877 2.877 0 1 1 0 5.755 2.877 2.877 0 0 1 0-5.755"
    />
  </Svg>
);
export default IconlystEmailSearchBroken;
