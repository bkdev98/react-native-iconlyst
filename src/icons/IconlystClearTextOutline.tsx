import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClearTextOutline = ({
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
      d="M7.58 6.186a2.82 2.82 0 0 1 2.123-.963h9.126a3.42 3.42 0 0 1 3.42 3.42v8.245a3.42 3.42 0 0 1-3.42 3.422H9.703c-.813 0-1.588-.351-2.124-.964l-4.131-4.722a2.824 2.824 0 0 1 0-3.717zm2.123.537c-.381 0-.745.164-.995.45l-4.131 4.722a1.324 1.324 0 0 0 0 1.741l4.131 4.722c.25.287.614.452.995.452h9.126c1.06 0 1.92-.86 1.92-1.922V8.644c0-1.061-.86-1.921-1.92-1.921z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.122 10.18a.75.75 0 0 1 1.06 0l1.526 1.526 1.525-1.525a.75.75 0 0 1 1.06 1.06l-1.524 1.525 1.525 1.525a.75.75 0 0 1-1.061 1.061l-1.525-1.525-1.525 1.525a.75.75 0 0 1-1.061-1.06l1.525-1.526-1.525-1.525a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClearTextOutline;
