import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarDocumentBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.627 12.71V9.064c0-.53-.205-1.038-.57-1.42l-3.793-3.949a2.05 2.05 0 0 0-1.478-.63H8.135a3.747 3.747 0 0 0-3.761 3.657v10.507a3.753 3.753 0 0 0 3.67 3.835h7.926a3.81 3.81 0 0 0 3.657-3.835v-1.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.269 6.018a2.56 2.56 0 0 0 2.554 2.56h2.738M12.712 10.89h-2.397a1.291 1.291 0 1 0 0 2.583h1.475a1.29 1.29 0 1 1 0 2.582H9.392M11.053 16.056v1.084m0-7.34v1.094"
    />
  </Svg>
);
export default IconlystDollarDocumentBroken;
