import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryEditOutline = ({
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
      d="m11.47 9.245 2.504.814a.77.77 0 0 0 .673-.11.75.75 0 0 0 .31-.61l-.014-5.689h.569c1.239-.01 2.188.419 2.832 1.109.65.69 1.045 1.71 1.048 2.98v.01l.018 2.56a.75.75 0 0 0 1.5-.01l-.018-2.57c-.006-1.576-.502-2.982-1.453-3.99-.958-1.03-2.32-1.6-3.93-1.59l-1.252.002-.03-.001h-.038l-.051.001-6.778.008c-1.606.01-2.966.58-3.92 1.61C2.492 4.8 1.999 6.2 2.003 7.78l.018 7.68c.004 1.58.5 2.98 1.453 4 .958 1.03 2.32 1.6 3.93 1.59H10a.746.746 0 0 0 .618-1.172.745.745 0 0 0-.618-.328H7.401a5 5 0 0 1-.97-.09 3.8 3.8 0 0 1-.905-.308 3.3 3.3 0 0 1-.957-.712c-.649-.7-1.045-1.72-1.048-2.98l-.018-7.68c-.003-1.27.39-2.29 1.037-2.99.642-.69 1.59-1.12 2.823-1.13h.592l.007 5.7a.75.75 0 0 0 .311.61c.195.14.446.18.674.1zM9.454 3.657l3.988-.005.01 4.657-1.753-.57a.75.75 0 0 0-.468 0l-1.772.585z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.799 17.81-2.382 2.63a3 3 0 0 1-.347.328 3 3 0 0 1-1.357.611l-.915.15a1.773 1.773 0 0 1-2.056-1.94l.102-.94a2.9 2.9 0 0 1 .735-1.65l2.479-2.732a.7.7 0 0 1 .135-.15l.992-1.088a2 2 0 0 1 2.834-.11l.84.78a2 2 0 0 1 .11 2.83zm.065-2.29.004-.011a.505.505 0 0 0-.028-.71l-.84-.78a.5.5 0 0 0-.709.02l-.572.631 1.528 1.528zm-1.628 1.788-1.526-1.526L14.694 18l-.002.005c-.2.233-.326.508-.357.805l-.102.94a.274.274 0 0 0 .318.3l.915-.15a1.6 1.6 0 0 0 .25-.069l.05-.02.037-.014a1.5 1.5 0 0 0 .501-.357l.002-.01z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryEditOutline;
