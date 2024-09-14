import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadmillBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M14.463 9.513c-.939 0-1.496-.567-2.325-1.493-.738-.825-1.575-1.76-2.93-1.981-1.848-.303-3.526.84-4.368 2.107a.75.75 0 0 0 1.25.83c.556-.837 1.693-1.651 2.875-1.457.2.033.383.097.557.182-.987 1.328-1.969 3.036-.726 5.024q.168.266.342.52c.417.62.777 1.156.784 1.806.011.989-.558 2.005-1.015 2.822a.751.751 0 0 0 1.31.732c.515-.921 1.22-2.181 1.205-3.571-.013-1.1-.558-1.91-1.039-2.625q-.16-.234-.315-.48c-.7-1.12-.287-2.042.617-3.274.111.119.222.238.336.366.837.933 1.785 1.992 3.442 1.992a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M7.064 13.119c-.374.27-.933.454-1.616.529-.575.065-1.167.04-1.724.012a.74.74 0 0 0-.788.709.75.75 0 0 0 .709.789c.308.016.64.03.986.03.32 0 .652-.012.982-.048.954-.105 1.739-.377 2.332-.807a.749.749 0 1 0-.881-1.214M13.443 6.737c1.202 0 2.18-.979 2.18-2.182s-.978-2.18-2.18-2.18-2.18.978-2.18 2.18.978 2.182 2.18 2.182"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.004 6.235a.75.75 0 0 0-.986-.39l-2.366 1.023a.75.75 0 0 0-.446.594L16.03 16.63 4.41 18.126a1.69 1.69 0 0 0-1.42 1.25 1.68 1.68 0 0 0 .292 1.456c.319.418.804.66 1.329.665l12.828.128h.023c.76 0 1.476-.33 1.969-.91a2.574 2.574 0 0 0-1.867-4.242l1.075-8.398 1.974-.854a.75.75 0 0 0 .39-.986"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreadmillBulk;
