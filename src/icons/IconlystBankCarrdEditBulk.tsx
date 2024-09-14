import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdEditBulk = ({
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
      d="M17.537 3.258H7.467c-2.67 0-4.464 1.877-4.464 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3v-.08c0-2.793-1.794-4.67-4.464-4.67M19.899 15.489l-3.056 3.33a.9.9 0 0 1-.547.299l-.752.079.078-.731c.02-.201.1-.382.228-.523l3.081-3.361a.22.22 0 0 1 .152-.072h.009c.036 0 .096.009.149.057l.645.597a.227.227 0 0 1 .013.325m.357-2.025a1.7 1.7 0 0 0-1.241-.452 1.7 1.7 0 0 0-1.19.557l-3.082 3.362c-.346.38-.558.857-.614 1.375l-.077.73c-.053.484.12.953.476 1.286a1.52 1.52 0 0 0 1.311.394l.705-.12a2.4 2.4 0 0 0 1.415-.773l3.046-3.321a1.72 1.72 0 0 0-.096-2.436z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.999 14.509c0 2.79 1.8 4.67 4.47 4.67h4.52a.32.32 0 0 0 .313-.3c.02-.254.06-.509.087-.76.1-.89.46-1.71 1.06-2.36l3.09-3.37c.62-.68 1.47-1.08 2.4-1.12.93-.03 1.82.28 2.5.91l.058.052a.3.3 0 0 0 .502-.221v-1.901a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCarrdEditBulk;
