import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdEditBold = ({
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
      d="M17.037 3.258H6.967c-2.67 0-4.464 1.877-4.464 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3v-.08c0-2.793-1.794-4.67-4.464-4.67M2.499 14.506c0 2.79 1.8 4.67 4.47 4.67h4.52a.32.32 0 0 0 .312-.3c.02-.254.06-.508.088-.76.1-.89.46-1.71 1.06-2.36l3.09-3.37c.62-.68 1.47-1.08 2.4-1.12.93-.03 1.82.28 2.5.91l.058.053a.3.3 0 0 0 .502-.222v-1.9a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.399 15.489-3.056 3.33a.9.9 0 0 1-.54.298h-.007l-.752.08.078-.731c.02-.201.1-.382.228-.523l3.08-3.361a.22.22 0 0 1 .153-.072h.009c.036 0 .096.009.149.057l.645.597a.227.227 0 0 1 .013.325m.357-2.025a1.7 1.7 0 0 0-1.241-.452 1.7 1.7 0 0 0-1.19.557l-3.082 3.362c-.346.38-.558.857-.614 1.375l-.077.73c-.053.484.12.953.476 1.286a1.52 1.52 0 0 0 1.31.394l.706-.12a2.4 2.4 0 0 0 1.415-.773l3.046-3.321a1.72 1.72 0 0 0-.096-2.436z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdEditBold;
