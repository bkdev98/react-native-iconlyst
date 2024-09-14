import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInsuranceHandTwoTone = ({
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
      d="M12.82 16.96c.686-.1 1.383 0 2.076-.016 1.606-.038 2.865-1.396 4.088-2.316.625-.471 1.5-.408 2.052.146a1.58 1.58 0 0 1 0 2.229c-1.32 1.326-2.488 2.556-4.277 3.252-2.484.966-4.789.498-7.304 0-.973-.192-1.87-.204-2.854-.204"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.819 16.927h1.356c.968 0 1.75-.696 1.75-1.664 0-.805-.545-1.448-1.325-1.644-1.117-.28-2.23-.501-3.396-.472-1.848.045-3.14 1.074-4.603 2.054M4.324 21.002h1.017c.777 0 1.26-.548 1.26-1.323v-4.542c0-.777-.483-1.325-1.26-1.325H4.324"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.602 9.748h-1.79a.51.51 0 0 1-.51-.51V7.783h-1.458a.51.51 0 0 1-.511-.51V5.475c0-.281.229-.51.51-.51h1.458V3.51c0-.281.229-.511.511-.511h1.79c.282 0 .511.23.511.51v1.455h1.458c.282 0 .51.23.51.511v1.796a.51.51 0 0 1-.51.511h-1.458v1.455a.51.51 0 0 1-.51.51"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystInsuranceHandTwoTone;
