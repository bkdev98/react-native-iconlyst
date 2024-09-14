import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarrotTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="m15.097 14.648-1.447-1.446M7.864 10.309l1.446 1.446M9.792 18.024l-.964-.965M15.579 3c.398.398.657 3.602 0 4.738M18.867 5.092l-3.102 3.102M20.959 8.38c-.399-.399-3.644-.658-4.78 0" />
    </G>
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M9.13 8.309c-2.063 2.063-7.428 10.73-5.778 12.38s10.317-3.714 12.38-5.777 1.824-4.78 0-6.603c-1.822-1.824-4.539-2.064-6.602 0Z"
    />
  </Svg>
);
export default IconlystCarrotTwoTone;
