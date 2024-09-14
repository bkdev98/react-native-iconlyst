import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinSwap3Bold = ({
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
      d="M6.425 5.163v.597a.75.75 0 0 0 .75.75.76.76 0 0 0 .466-.162l1.739-1.38a.75.75 0 0 0 0-1.176l-1.74-1.38A.752.752 0 0 0 6.426 3v.663C4.263 3.833 2.55 5.625 2.55 7.83a.75.75 0 0 0 1.5 0 2.694 2.694 0 0 1 2.375-2.667M21.45 16.17a.75.75 0 0 0-1.5 0 2.693 2.693 0 0 1-2.43 2.674v-.604a.749.749 0 0 0-1.227-.58l-1.68 1.382a.75.75 0 0 0 0 1.159l1.681 1.38a.75.75 0 0 0 .796.098.75.75 0 0 0 .43-.678v-.657c2.188-.142 3.93-1.95 3.93-4.173M14.192 16.63c-3.76 0-6.818-3.06-6.818-6.82 0-.146-.146-.244-.272-.169-1.555.927-2.609 2.61-2.609 4.55a5.325 5.325 0 0 0 5.317 5.32c1.94 0 3.622-1.056 4.55-2.612.073-.124-.023-.269-.168-.269"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.192 15.13a5.325 5.325 0 0 0 5.317-5.32 5.325 5.325 0 0 0-5.317-5.32 5.325 5.325 0 0 0-5.318 5.32 5.325 5.325 0 0 0 5.318 5.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinSwap3Bold;
