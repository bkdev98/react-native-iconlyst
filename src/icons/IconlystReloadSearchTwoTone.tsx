import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadSearchTwoTone = ({
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
      d="M21.5 12.007a9 9 0 0 1-3.906 7.406 8.994 8.994 0 0 1-12.51-2.314C2.268 13.01 3.306 7.404 7.396 4.59a9.01 9.01 0 0 1 12.384 2.114"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.766 3.275.2 3.408-3.388.2"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path
        d="M12.228 8.687a2.964 2.964 0 1 1 0 5.928 2.964 2.964 0 0 1 0-5.928"
        clipRule="evenodd"
      />
      <Path d="m14.246 13.823 1.493 1.49" />
    </G>
  </Svg>
);
export default IconlystReloadSearchTwoTone;
