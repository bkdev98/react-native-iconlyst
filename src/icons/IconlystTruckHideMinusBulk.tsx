import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckHideMinusBulk = ({
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
      d="M19.072 17.438h-.174a2.63 2.63 0 0 0-1.798-1.796V10.16l2.344 1.036c.581.251.956.83.956 1.472h-1.65a.75.75 0 0 0 0 1.5h1.65v1.94a1.33 1.33 0 0 1-1.328 1.33m-3.852 1.054c-.03-.1-.04-.2-.04-.299v-.004c.002-.358.161-.678.42-.886.2-.17.46-.27.75-.27s.55.1.75.28c.25.21.41.53.41.88 0 .64-.52 1.17-1.16 1.17-.54 0-1-.37-1.13-.87m-9.18-.28v-.019c0-.64.52-1.16 1.17-1.16.64 0 1.16.52 1.16 1.16 0 .03 0 .06-.01.09a1.16 1.16 0 0 1-1.15 1.08c-.64 0-1.16-.52-1.17-1.15m14.005-8.39-2.945-1.3v-.53c0-1.56-1.27-2.83-2.83-2.83h-.785c-.223 0-.37.236-.298.447q.053.15.093.303c.08.25.14.5.17.75.07.35.1.711.1 1.07 0 3.51-2.85 6.361-6.36 6.361-1.21 0-2.33-.33-3.29-.92-.26-.15-.51-.33-.75-.52a7 7 0 0 1-.195-.173c-.204-.187-.555-.05-.555.226v3.407c0 1.35.96 2.49 2.23 2.76a2.674 2.674 0 0 0 2.58 1.99c1.2 0 2.22-.81 2.55-1.92l.001-.005h4.028l.001.005a2.68 2.68 0 0 0 2.56 1.92c1.21 0 2.23-.81 2.55-1.92l.001-.005h.171c1.56 0 2.828-1.27 2.828-2.83v-3.44c0-1.24-.73-2.359-1.855-2.846"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.03 12.347a4.61 4.61 0 0 0 4.609-4.6 4.614 4.614 0 0 0-4.608-4.61 4.613 4.613 0 0 0-4.607 4.61c0 2.537 2.066 4.6 4.607 4.6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.474 6.996H5.588a.75.75 0 0 0 0 1.5h2.886a.75.75 0 0 0 0-1.5"
    />
  </Svg>
);
export default IconlystTruckHideMinusBulk;
