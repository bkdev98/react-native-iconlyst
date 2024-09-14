import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySearchOutline = ({
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
      d="M21.61 8.054v.002l.019 2.31a.75.75 0 1 1-1.5.013l-.018-2.315V8.06c-.003-1.299-.409-2.344-1.075-3.056-.661-.707-1.635-1.148-2.904-1.145l-.598.002.015 5.836a.75.75 0 0 1-.982.715l-2.564-.836-2.581.851a.75.75 0 0 1-.985-.711L8.43 3.878l-.621.002c-1.265.003-2.237.447-2.896 1.158-.665.716-1.066 1.763-1.063 3.061l.018 7.841c.003 1.299.408 2.344 1.075 3.057.66.706 1.634 1.146 2.903 1.144l3.912-.02a.75.75 0 0 1 .008 1.5l-3.913.02H7.85c-1.64.004-3.028-.577-4.004-1.62-.97-1.037-1.475-2.47-1.479-4.077L2.35 8.103c-.004-1.61.498-3.045 1.463-4.085C4.784 2.97 6.17 2.384 7.805 2.38l6.915-.017a1 1 0 0 1 .12 0l1.288-.004c1.64-.003 3.028.577 4.003 1.62.97 1.036 1.475 2.468 1.48 4.075m-7.576-4.19.012 4.8-1.812-.59a.75.75 0 0 0-.467 0l-1.832.604-.005-4.803zm4.804 10.716a2.445 2.445 0 1 0-3.457 3.457 2.445 2.445 0 0 0 3.457-3.457m-4.517-1.061a3.945 3.945 0 0 1 6.058 4.998l1.25 1.25a.75.75 0 0 1-1.06 1.061l-1.25-1.25a3.946 3.946 0 0 1-4.998-6.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliverySearchOutline;
