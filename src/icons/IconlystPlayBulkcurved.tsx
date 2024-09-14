import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayBulkcurved = ({
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
      fillRule="evenodd"
      d="M12.25 2.854c-7.198 0-9.75 2.552-9.75 9.75s2.552 9.75 9.75 9.75S22 19.802 22 12.604s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.04 16.08c.32 0 .663-.117.963-.241.707-.293 4.003-2.105 4.003-3.379 0-1.254-3.226-3.031-4.05-3.372-.334-.139-1.115-.46-1.587.011-.136.136-.543.547-.554 3.342-.012 2.813.414 3.24.554 3.379.19.19.423.26.67.26"
    />
  </Svg>
);
export default IconlystPlayBulkcurved;
