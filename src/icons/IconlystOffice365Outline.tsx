import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOffice365Outline = ({
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
      d="M14.034 2.296a.75.75 0 0 1 .482-.012l5.153 1.61a.75.75 0 0 1 .526.716v14.77a.75.75 0 0 1-.525.716l-5.153 1.62a.75.75 0 0 1-.48-.01l-9.57-3.462a.75.75 0 0 1 .252-1.455l8.788-.031V7.64L8.651 8.982v5.17a.75.75 0 0 1-.443.683L4.862 16.34a.75.75 0 0 1-1.057-.684v-9.08a.75.75 0 0 1 .491-.703zm.278 1.496L5.305 7.1v7.396l1.846-.83V8.411a.75.75 0 0 1 .55-.723l6.356-1.756a.75.75 0 0 1 .95.722v10.851a.75.75 0 0 1-.747.75l-5.3.019 5.349 1.935 4.386-1.38V5.163z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOffice365Outline;
