import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylist2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.942 20.02h5.953a3.11 3.11 0 0 0 3.108-3.108V7.088a3.11 3.11 0 0 0-3.108-3.108H6.942a3.11 3.11 0 0 0-3.108 3.108v9.824a3.11 3.11 0 0 0 3.108 3.108"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.097 12.872a7.6 7.6 0 0 1-2.236 1.403c-.723.284-1.327-.07-1.415-.782a14 14 0 0 1 0-2.99c.096-.74.762-1.054 1.415-.78a7.5 7.5 0 0 1 2.236 1.404c.557.504.57 1.22 0 1.745"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.914 6.543v10.914M21.834 8.922v6.155"
    />
  </Svg>
);
export default IconlystVideoPlaylist2Light;
