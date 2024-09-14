import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHourglassBold = ({
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
      d="M14.765 18.116a1.43 1.43 0 0 1-1.336.904h-2.543a1.43 1.43 0 0 1-1.336-.905 1.42 1.42 0 0 1 .349-1.568c.194-.233.46-.486.726-.736.444-.419.864-.814 1.02-1.243l.12-.328.742-.034.16.362c.159.428.579.824 1.024 1.244.265.249.532.502.763.774.393.366.529.982.31 1.53m-.273-5.423c-.482-.498-.483-.887-.015-1.372 2.05-1.967 3.405-3.267 3.55-4.771.088-1.116-.216-2.136-.857-2.872-.616-.708-1.501-1.115-2.587-1.178l-4.88.001c-1.056.062-1.94.469-2.556 1.177-.641.736-.945 1.756-.856 2.88.144 1.498 1.498 2.797 3.536 4.75.48.498.48.887.013 1.371-2.051 1.967-3.405 3.267-3.55 4.764v.008c-.088 1.116.216 2.136.857 2.872.616.708 1.5 1.114 2.586 1.177l4.879-.001c1.058-.062 1.942-.468 2.558-1.176.64-.736.945-1.756.856-2.88-.144-1.495-1.498-2.795-3.534-4.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHourglassBold;
