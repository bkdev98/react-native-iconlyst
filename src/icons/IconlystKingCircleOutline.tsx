import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingCircleOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M15.05 15.42H9.453a1.426 1.426 0 0 1-1.405-1.18l-.72-4.088a.966.966 0 0 1 1.561-.917l1.36 1.105 1.277-1.44a1 1 0 0 1 1.442 0l1.28 1.44 1.364-1.1a.966.966 0 0 1 1.561.917l-.718 4.09a1.426 1.426 0 0 1-1.407 1.174m-6-4.12.472 2.684 5.521-.06.426-2.643-.678.549a.96.96 0 0 1-1.329-.11l-1.213-1.368-1.217 1.368a.96.96 0 0 1-1.332.1z"
    />
  </Svg>
);
export default IconlystKingCircleOutline;
