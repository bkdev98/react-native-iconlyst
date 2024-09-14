import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneTakeOffOutline = ({
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
      d="M7.336 18.284a4.53 4.53 0 0 1-4.164-2.99l-.01-.025q-.034-.07-.064-.142c-.093-.22-.453-1.09-.543-1.309a.75.75 0 0 1 1.388-.57l.306.742c.52-.218 1.126-.476 1.738-.736l1.925-.815-2.07-5.014a.75.75 0 0 1 .442-.994q.289-.103.567-.212a11 11 0 0 1 1.342-.449 2.77 2.77 0 0 1 2.524.78c1.21 1.06 2.42 2.122 3.6 3.213.985-.392 2.114-.89 3.232-1.293a4.14 4.14 0 0 1 3.128.008 2.41 2.41 0 0 1 1.227 1.544c.46 1.633-.8 2.995-2.158 3.57A648 648 0 0 1 9.48 17.836a5.8 5.8 0 0 1-2.145.448m-2.439-2.938c.911 1.435 2.261 1.805 4.027 1.1 3.6-1.446 7.2-2.952 10.24-4.234.646-.273 1.524-.973 1.3-1.782a.92.92 0 0 0-.473-.616 2.65 2.65 0 0 0-1.93.07c-.991.357-1.931.765-3.057 1.261a1.45 1.45 0 0 1-1.7-.277A192 192 0 0 0 9.728 7.68c-.582-.509-.94-.508-1.187-.449q-.52.136-1.018.338l2.06 4.99a.75.75 0 0 1-.406.978c-.659.274-1.638.69-2.6 1.1z"
    />
  </Svg>
);
export default IconlystPlaneTakeOffOutline;
