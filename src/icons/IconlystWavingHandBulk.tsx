import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWavingHandBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.785 10.12c-.239-.53-.863-1.783-1.71-3.438a1.12 1.12 0 0 0-1.507-.495 1.91 1.91 0 0 0-.844 2.567l.696 1.38a.43.43 0 0 1-.192.585c-.792.4-1.412 1.135-1.702 2.015-.283.893-.217 1.825.187 2.624a.437.437 0 0 1-.778.393 4.3 4.3 0 0 1-.23-3.296 4.34 4.34 0 0 1 1.65-2.22l.104-.071-3.324-6.579c-.376-.686-1.265-.949-1.982-.587-.685.346-1.002 1.182-.717 1.918l1.908 3.775a.43.43 0 0 1-.192.585.437.437 0 0 1-.586-.192L7.97 3.946c-.376-.686-1.266-.95-1.983-.587a1.51 1.51 0 0 0-.69 1.97l2.934 5.808a.43.43 0 0 1-.192.585.43.43 0 0 1-.585-.192l-1.54-3.05c-.372-.734-1.3-1.043-2.028-.675a1.53 1.53 0 0 0-.75.882c-.129.395-.102.794.081 1.155l3.683 7.29a7.3 7.3 0 0 0 4.256 3.665 7.29 7.29 0 0 0 5.602-.427 7.39 7.39 0 0 0 3.666-4.257c.751-2.31.098-4.325-.639-5.992"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.45 17.032a.753.753 0 0 0-.924-.52.75.75 0 0 0-.52.924c.213.764.658 2.353 2.482 3.57a.75.75 0 0 0 .832-1.249c-1.362-.909-1.68-2.045-1.87-2.725M19.824 3.772a.744.744 0 0 0-.996.34.753.753 0 0 0 .332 1.005c.056.028 1.368.72 1.363 2.556a.75.75 0 0 0 .748.752h.002a.75.75 0 0 0 .75-.748c.008-2.8-2.11-3.861-2.2-3.905"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWavingHandBulk;
