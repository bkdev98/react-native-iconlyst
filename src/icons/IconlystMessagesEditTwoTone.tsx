import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesEditTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.52 10.582a9.05 9.05 0 0 1-2.34 8.61 8.98 8.98 0 0 1-10.152 1.835c-.492-.198-.896-.358-1.28-.357-1.068.01-2.396 1.052-3.087.361-.693-.691.34-2.029.337-3.107 0-.385-.155-.783-.355-1.276-1.55-3.34-.964-7.429 1.78-10.195A8.95 8.95 0 0 1 12.565 3.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.28 11.49-.82.138a.92.92 0 0 1-1.066-1.008l.091-.849c.045-.41.216-.795.49-1.103l3.573-3.913a1.123 1.123 0 0 1 1.59-.062l.755.7c.457.424.484 1.139.062 1.597l-3.535 3.87c-.298.334-.7.557-1.14.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesEditTwoTone;
