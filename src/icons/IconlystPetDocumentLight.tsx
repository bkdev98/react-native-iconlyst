import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetDocumentLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.058 21.162H8.506a4.057 4.057 0 0 1-4.056-4.056v-9.61a4.057 4.057 0 0 1 4.056-4.057h6.988a4.057 4.057 0 0 1 4.056 4.056v3.959M13.621 8.07H8.617m2.611 4.37H8.617"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.066 14.134v-.052m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M19.33 15.792v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M12.816 15.792v-.052m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M16.097 20.757c1.368 0 3.103 1.185 3.078-.639-.01-1.368-1.435-2.652-3.078-2.653-1.652 0-3.293 1.395-3.065 2.817.252 1.65 1.853.475 3.065.475Z"
    />
  </Svg>
);
export default IconlystPetDocumentLight;
