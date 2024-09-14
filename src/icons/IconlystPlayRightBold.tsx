import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayRightBold = ({
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
      d="M18.014 9.439c-2.193-1.984-5.91-4.312-8.677-5.426-1.203-.39-2.21-.346-2.99.13-.853.521-1.408 1.549-1.654 3.08-.18 1.609-.268 3.3-.26 5.026-.008 1.73.08 3.422.263 5.052.232 1.494.778 2.517 1.625 3.042q.654.405 1.517.405a5 5 0 0 0 1.531-.269c2.738-1.103 6.455-3.432 8.64-5.412 1.034-.908 1.558-1.855 1.56-2.815 0-.96-.526-1.908-1.555-2.813"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayRightBold;
