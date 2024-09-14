import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTranslateLanguageBulk = ({
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
      d="M10.404 3.61a1 1 0 1 0-2 0v1.682a1 1 0 1 0 2 0zm3.843 1.248a1 1 0 0 0-1.891.581q0 .063-.013.206c-.019.217-.062.536-.146.932a12 12 0 0 1-1.092 3.017c-1.186 2.282-3.457 4.892-7.814 6.225a1 1 0 0 0 .585 1.913c4.938-1.511 7.605-4.524 9.004-7.215a14 14 0 0 0 1.273-3.525c.1-.47.155-.868.182-1.168q.02-.226.021-.394a2 2 0 0 0-.006-.18 1.067 1.067 0 0 0-.102-.392"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2 5.291a1 1 0 0 1 1-1h13.507a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4.454 3.931a1 1 0 0 1 1.204.743c.382 1.616 1.698 3.496 3.414 4.963a12 12 0 0 0 1.507 1.105l2.769-5.423a1 1 0 0 1 1.781 0l4.762 9.326a1 1 0 0 1-1.782.91l-3.87-7.582-1.856 3.635c.615.205 1.196.297 1.709.262a1 1 0 1 1 .136 1.996c-.899.061-1.837-.117-2.763-.461l-1.097 2.15a1 1 0 0 1-1.782-.91l1.081-2.117a14 14 0 0 1-1.894-1.37c-1.907-1.63-3.548-3.853-4.062-6.023a1 1 0 0 1 .743-1.204"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTranslateLanguageBulk;
