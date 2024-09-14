import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallAddPlusBulk = ({
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
      d="M19.843 14.817a42 42 0 0 1-.78-.755c-1.282-1.28-2.39-.844-3.276-.495-1.065.419-2.07.815-3.908-1.025-1.836-1.832-1.441-2.84-1.025-3.905.348-.89.782-1.997-.5-3.275-.282-.282-.535-.55-.77-.795-.938-.99-1.618-1.704-2.574-1.717h-.026c-.821 0-1.682.525-2.962 1.802-.014.014-.083.083-.095.1-.286.282-1.047 1.033-1.052 2.488-.007 2.268 1.823 5.253 5.44 8.869 3.61 3.608 6.589 5.437 8.855 5.437h.025c1.454-.008 2.198-.77 2.478-1.056l.094-.091c1.292-1.292 1.814-2.158 1.805-2.988-.013-.961-.733-1.646-1.73-2.594"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.375 5.295H19.28v-2.09a.75.75 0 0 0-1.5 0v2.09h-2.094a.75.75 0 1 0 0 1.5h2.094v2.1a.75.75 0 0 0 1.5 0v-2.1h2.095a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallAddPlusBulk;
