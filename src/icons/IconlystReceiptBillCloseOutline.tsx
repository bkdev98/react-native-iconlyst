import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillCloseOutline = ({
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
      d="M9.097 14.453a.75.75 0 0 1 .75-.75h4.688a.749.749 0 1 1 0 1.5H9.847a.75.75 0 0 1-.75-.75M14.244 11.967a.75.75 0 0 1-1.06 0l-.97-.969-.97.97a.75.75 0 1 1-1.06-1.062l.969-.969-.971-.97a.75.75 0 0 1 1.06-1.063l.972.973.971-.97a.75.75 0 0 1 1.061 1.06l-.971.97.969.97a.75.75 0 0 1 0 1.06"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m7.601 20.58-.754.361a1.954 1.954 0 0 1-2.797-1.765l.018-12.252c0-.805.131-1.553.41-2.207a4 4 0 0 1 .753-1.174c.805-.863 1.958-1.293 3.33-1.293h7.299c1.368 0 2.525.43 3.336 1.29.804.853 1.18 2.038 1.18 3.386l.01 12.254a1.953 1.953 0 0 1-2.796 1.763l-.76-.365a1.03 1.03 0 0 0-.837-.023l-2.142.875a4.32 4.32 0 0 1-3.267 0l-2.147-.875a1.03 1.03 0 0 0-.835.023zm9.877-1.353.76.363c.3.142.648-.076.648-.41l-.01-12.254c0-.666-.114-1.217-.312-1.658a2.5 2.5 0 0 0-.46-.7c-.468-.496-1.194-.818-2.244-.818H8.56c-1.054 0-1.772.322-2.233.814-.467.502-.76 1.28-.76 2.362L5.55 19.178c0 .336.348.554.649.41l.753-.361c.38-.184.796-.266 1.209-.248.287.013.572.076.843.187l2.147.875a2.82 2.82 0 0 0 2.133 0l2.142-.875a2.53 2.53 0 0 1 2.052.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillCloseOutline;
