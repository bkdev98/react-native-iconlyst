import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryEditTwoTone = ({
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
      d="M20.757 10.451 20.74 7.89c-.007-2.846-1.783-4.851-4.631-4.845l-8.15.019C5.12 3.07 3.344 5.086 3.35 7.932l.018 7.677C3.375 18.454 5.152 20.46 8 20.453h2.596"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.787 3.045.016 6.451-2.74-.893-2.754.909L9.3 3.07"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.271 20.94.915-.153c.491-.082.94-.33 1.272-.7l3.557-3.918c.471-.508.44-1.302-.069-1.773l-.84-.779a1.255 1.255 0 0 0-1.774.069l-3.6 3.965c-.306.342-.497.77-.546 1.225l-.102.944a1.023 1.023 0 0 0 1.187 1.12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.274 14.84 2.591 2.59"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryEditTwoTone;
