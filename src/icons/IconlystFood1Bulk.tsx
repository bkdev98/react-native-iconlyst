import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood1Bulk = ({
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
      d="M2.798 15.743c.202-.163.45-.225.702-.225h17c.253 0 .5.062.702.224.202.163.304.38.348.587.083.384-.013.82-.128 1.166a2.37 2.37 0 0 1-2.246 1.618H4.824a2.37 2.37 0 0 1-2.246-1.618c-.115-.346-.21-.782-.128-1.166.044-.206.146-.424.348-.587"
    />
    <Path
      fill={props.color}
      d="M12.9 5.386a.9.9 0 1 0-1.8 0v1.161c-1.97.16-3.748.85-5.072 2.008-1.532 1.34-2.424 3.283-2.305 5.657a.5.5 0 0 0 .5.475h15.555a.5.5 0 0 0 .5-.475c.118-2.374-.774-4.317-2.306-5.657-1.324-1.158-3.102-1.847-5.072-2.008z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFood1Bulk;
