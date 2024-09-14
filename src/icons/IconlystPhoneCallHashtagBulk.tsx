import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHashtagBulk = ({
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
      d="M20.032 14.765q-.369-.346-.79-.763c-1.293-1.292-2.364-.873-3.31-.502-1.08.424-2.1.822-3.96-1.038-1.858-1.86-1.46-2.88-1.037-3.96.37-.947.79-2.018-.503-3.31a47 47 0 0 1-.772-.798c-.952-1.003-1.64-1.728-2.606-1.739H7.03c-.83 0-1.701.531-2.997 1.828l-.093.095c-.29.285-1.058 1.04-1.065 2.508-.01 2.295 1.84 5.314 5.503 8.973 3.65 3.647 6.662 5.497 8.953 5.496h.02c1.468-.007 2.222-.774 2.505-1.063l.097-.093c1.307-1.31 1.835-2.187 1.823-3.025-.014-.967-.74-1.656-1.744-2.609"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.852 6.576h-1.245l.205-1.229h1.245zm2.524-2.729h-.55l.089-.528a.75.75 0 0 0-1.48-.246l-.128.774h-1.245l.088-.528a.75.75 0 1 0-1.48-.246l-.128.774h-.772a.75.75 0 1 0 0 1.5h.522l-.206 1.23h-.797a.75.75 0 0 0 0 1.5h.547l-.088.526a.751.751 0 0 0 1.48.246l.129-.773h1.245l-.088.527a.752.752 0 0 0 .74.873.75.75 0 0 0 .74-.627l.129-.773h.772a.75.75 0 0 0 0-1.5h-.522l.204-1.229h.799a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallHashtagBulk;
