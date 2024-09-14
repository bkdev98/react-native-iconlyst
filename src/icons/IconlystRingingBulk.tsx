import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingingBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.123 8.663c0-2.76-2.46-5.716-6.122-5.716S5.879 5.903 5.879 8.664c0 1.508-.367 2.147-.757 2.823-.38.66-.773 1.343-.771 2.726.253 3.045 2.997 3.641 7.65 3.641s7.398-.596 7.653-3.683c0-1.342-.393-2.025-.774-2.685-.39-.676-.757-1.315-.757-2.823"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.083 19.25h-4.1a.752.752 0 0 0-.584 1.218 3.36 3.36 0 0 0 2.63 1.282 3.37 3.37 0 0 0 2.639-1.282.749.749 0 0 0-.585-1.218M4.757 6.438a7.26 7.26 0 0 1 1.837-2.893.75.75 0 0 0 .016-1.06.75.75 0 0 0-1.06-.016 8.8 8.8 0 0 0-2.217 3.496.752.752 0 0 0 .712.987.75.75 0 0 0 .712-.514M20.666 5.975a8.8 8.8 0 0 0-2.223-3.513.75.75 0 0 0-1.046 1.075 7.3 7.3 0 0 1 1.846 2.912.75.75 0 0 0 1.423-.474"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingingBulk;
