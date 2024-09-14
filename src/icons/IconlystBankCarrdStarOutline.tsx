import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdStarOutline = ({
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
      d="M16.167 20.999a1.035 1.035 0 0 1-1.025-1.2l.285-1.625-1.185-1.137a1.03 1.03 0 0 1-.314-.745 1.02 1.02 0 0 1 .3-.73 1.1 1.1 0 0 1 .56-.287l1.66-.242.73-1.47a1.037 1.037 0 0 1 1.855-.01l.006.01.73 1.471 1.643.232c.27.04.514.184.68.4a1.027 1.027 0 0 1-.116 1.38l-1.171 1.131.283 1.613a1.043 1.043 0 0 1-.851 1.192c-.22.034-.443 0-.641-.1l-1.474-.774-1.468.77c-.15.077-.318.119-.487.12m-.195-4.383.675.649a1.04 1.04 0 0 1 .3.934l-.162.917.854-.447a1.02 1.02 0 0 1 .978.01l.829.434-.163-.922a1.02 1.02 0 0 1 .3-.927l.67-.648-.935-.136a1.05 1.05 0 0 1-.786-.572l-.42-.841-.423.852a1.05 1.05 0 0 1-.771.566z"
    />
    <Path
      fill={props.color}
      d="M11.779 20.334h-4.16a4.562 4.562 0 0 1-4.714-4.917V8.83A4.61 4.61 0 0 1 7.62 3.913h10.07a4.56 4.56 0 0 1 4.715 4.916v2.924a.75.75 0 1 1-1.5 0V8.83a3.11 3.11 0 0 0-3.214-3.416H7.62A3.11 3.11 0 0 0 4.405 8.83v6.588a3.08 3.08 0 0 0 3.215 3.417h4.159a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M21.654 10.71h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystBankCarrdStarOutline;
