import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceTwoTonesharp = ({
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
    <G
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.25 22.104v-4.39M9.53 22.104h5.44" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M20.755 12.604v-4.39M3.745 12.604v-4.39"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 17.714c-2.366 0-4.285-1.927-4.285-4.304v-6c0-2.378 1.919-4.306 4.285-4.306 2.368 0 4.286 1.928 4.286 4.305v6c0 2.378-1.918 4.305-4.286 4.305"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoiceTwoTonesharp;
