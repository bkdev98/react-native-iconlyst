import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperUpload2Bold = ({
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
      d="m10.478 5.854.773-.776V7.36a.75.75 0 0 0 1.5 0V5.08l.772.774a.747.747 0 0 0 1.06.002.75.75 0 0 0 .002-1.061l-2.051-2.058a.746.746 0 0 0-1.051-.011q-.007.005-.014.009l-2.053 2.06a.751.751 0 0 0 1.062 1.059M11.999 13.752a1.454 1.454 0 1 0 0 2.91 1.454 1.454 0 1 0 0-2.91"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.577 19.202h-1.353a.75.75 0 0 1 0-1.5h1.353a.75.75 0 0 1 0 1.5m-5.578-1.04a2.96 2.96 0 0 1-2.956-2.96 2.956 2.956 0 0 1 5.912 0 2.96 2.96 0 0 1-2.956 2.96m-4.225-5.46H6.422a.75.75 0 0 1 0-1.5h1.352a.75.75 0 0 1 0 1.5m9.829-3.91H6.396c-2.137 0-3.574 1.5-3.574 3.73v5.36c0 2.231 1.438 3.73 3.576 3.73h11.205c2.138 0 3.575-1.499 3.575-3.73v-5.36c0-2.23-1.437-3.73-3.575-3.73"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperUpload2Bold;
