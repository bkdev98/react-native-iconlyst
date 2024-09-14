import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDisallowBroken = ({
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
      d="M8.978 7.324a1.72 1.72 0 0 0-1.694-1.695c-.922 0-1.695.782-1.696 1.694v6.965q.007.637.129 1.253M12.37 6.198c0-.45.178-.88.495-1.198a1.696 1.696 0 0 1 2.848.81"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.366 8V4.695a1.695 1.695 0 0 0-3.39-.001v6.151M13.682 20.87A6.78 6.78 0 0 1 6.736 18M15.759 11.722v-.074c0-1.189.963-2.152 2.15-2.152.68 0 1.23.551 1.23 1.23l-.001 3.563a6.78 6.78 0 0 1-2.008 4.75M19.635 5 4.365 20.271M15.755 14.107V9"
    />
  </Svg>
);
export default IconlystDisallowBroken;
