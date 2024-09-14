import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadmillBold = ({
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
      d="M3.645 15.158c.308.016.641.031.986.031.321 0 .652-.013.982-.05.954-.105 1.74-.376 2.332-.806a.75.75 0 0 0-.88-1.214c-.375.271-.934.454-1.617.529-.575.065-1.167.041-1.724.012a.74.74 0 0 0-.788.709.75.75 0 0 0 .71.789M13.443 6.737c1.202 0 2.18-.979 2.18-2.182s-.978-2.18-2.18-2.18-2.18.978-2.18 2.18.978 2.182 2.18 2.182"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.004 6.235a.75.75 0 0 0-.986-.39l-2.366 1.023a.75.75 0 0 0-.446.594l-1.175 9.167-5.14.662c.301-.68.54-1.446.531-2.257-.012-1.099-.558-1.909-1.039-2.625a19 19 0 0 1-.315-.479c-.7-1.12-.286-2.043.618-3.276l.336.367c.836.933 1.784 1.992 3.441 1.992a.75.75 0 1 0 0-1.5c-.939 0-1.495-.568-2.324-1.493-.739-.825-1.576-1.76-2.93-1.98-1.849-.304-3.527.84-4.368 2.106a.75.75 0 1 0 1.249.83c.557-.837 1.694-1.65 2.875-1.457.2.033.384.097.558.182-.988 1.328-1.97 3.036-.727 5.024q.168.265.342.521c.417.62.777 1.155.784 1.805.01.855-.412 1.722-.823 2.471l-4.689.604a1.69 1.69 0 0 0-1.42 1.25 1.68 1.68 0 0 0 .292 1.456c.32.418.804.66 1.33.665l12.827.128h.023c.76 0 1.476-.33 1.97-.91a2.574 2.574 0 0 0-1.868-4.242l1.075-8.398 1.974-.854a.75.75 0 0 0 .391-.986"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreadmillBold;
