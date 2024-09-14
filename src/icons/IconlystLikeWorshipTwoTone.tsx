import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikeWorshipTwoTone = ({
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
      d="M7.729 16.255c-.674-.485-.973-1.193-1.205-1.946-.156-.506-.2-3.393-.211-4.49a1.382 1.382 0 0 0-2.765-.01c-.041 2.11-.27 4.593.397 6.632C4.52 18.2 5.68 19.733 7.266 20.7M17.225 16.255c.673-.485.973-1.193 1.204-1.946.156-.506.2-3.393.211-4.49a1.382 1.382 0 0 1 2.765-.01c.041 2.11.271 4.593-.397 6.632-.575 1.759-1.736 3.292-3.321 4.258"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.883 20.796c.01-1.214-.03-4.114-.203-5.058-.288-1.589-1.829-3.724-4.303-3.021M14.07 20.796c-.01-1.214.029-4.114.202-5.058.29-1.589 1.83-3.724 4.304-3.021"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.792 6.39c.398-1.239-.064-2.662-1.363-3.08a2.2 2.2 0 0 0-1.042-.074c-.347.059-.676.3-.959.511-.283-.21-.612-.45-.96-.508a2.24 2.24 0 0 0-1.04.07c-1.298.423-1.764 1.842-1.366 3.082.613 1.966 3.366 3.252 3.366 3.252s2.712-1.262 3.364-3.252"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLikeWorshipTwoTone;
