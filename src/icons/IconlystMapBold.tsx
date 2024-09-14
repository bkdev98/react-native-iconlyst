import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapBold = ({
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
      fillRule="evenodd"
      d="M12.02 9.12 9.93 20.25H8.4l2.15-11.43-6.28-1.3c.05-.53.16-1.03.35-1.46l6.96 1.44 9.17 1.88v1.54zm4.7-6.87H8.28c-2.72 0-4.69 1.58-5.3 4.08a1 1 0 0 0-.05.15v.03c-.11.48-.18.98-.18 1.52v7.94c0 3.46 2.22 5.78 5.53 5.78h8.44c3.31 0 5.53-2.32 5.53-5.78V8.03c0-3.46-2.22-5.78-5.53-5.78"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapBold;
