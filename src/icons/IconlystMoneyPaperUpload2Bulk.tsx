import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperUpload2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.603 8.791H6.396c-2.137 0-3.574 1.499-3.574 3.73v5.36c0 2.231 1.438 3.73 3.576 3.73h11.205c2.138 0 3.575-1.499 3.575-3.73v-5.36c0-2.231-1.437-3.73-3.575-3.73"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.478 5.854.773-.776V7.36a.75.75 0 0 0 1.5 0V5.08l.772.774a.747.747 0 0 0 1.06.002.75.75 0 0 0 .002-1.061l-2.05-2.058a.746.746 0 0 0-1.051-.011l-.015.009-2.053 2.06a.75.75 0 1 0 1.062 1.059M12 18.161a2.96 2.96 0 0 1-2.957-2.96 2.956 2.956 0 0 1 5.912 0A2.96 2.96 0 0 1 12 18.161m-1.457-2.96c0-.8.653-1.45 1.456-1.45a1.454 1.454 0 1 1 0 2.91 1.46 1.46 0 0 1-1.456-1.46"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.577 19.201h-1.353a.75.75 0 0 1 0-1.5h1.353a.75.75 0 0 1 0 1.5M7.774 12.701H6.422a.75.75 0 0 1 0-1.5h1.352a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystMoneyPaperUpload2Bulk;
