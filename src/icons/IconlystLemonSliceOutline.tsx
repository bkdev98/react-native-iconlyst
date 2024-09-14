import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLemonSliceOutline = ({
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
      d="M4.944 6.027c2.402-2.465 5.993-3.346 9.13-2.192l.045.018c.109.048.228.062.408.038a4 4 0 0 0 .404-.084c.093-.023.198-.049.332-.078.297-.065.684-.128 1.107-.05.443.082.858.302 1.245.689.386.386.607.802.688 1.244.078.424.015.81-.05 1.108-.029.133-.055.239-.078.331-.037.15-.065.264-.084.405-.023.18-.01.299.039.408l.018.044c.699 1.902.65 3.972-.045 5.838a.75.75 0 1 1-1.405-.522c.574-1.545.61-3.238.049-4.779a2.2 2.2 0 0 1-.143-1.184c.03-.222.092-.479.14-.674l.044-.187c.052-.237.063-.39.04-.517-.02-.109-.076-.257-.274-.455-.198-.197-.346-.253-.455-.273-.127-.024-.28-.012-.516.04q-.077.016-.188.044c-.195.048-.451.11-.673.14-.347.045-.755.04-1.185-.144-2.55-.928-5.517-.22-7.524 1.846l-.016.015c-2.07 2.011-2.776 4.988-1.84 7.541.18.408.201.798.173 1.132-.019.219-.067.47-.104.66l-.034.18c-.039.232-.045.382-.019.509.023.109.08.25.26.43.182.182.323.239.432.261.126.026.277.02.508-.019q.075-.012.18-.034c.191-.036.441-.085.66-.103a2.27 2.27 0 0 1 1.132.172 6.87 6.87 0 0 0 4.264.13.75.75 0 0 1 .414 1.443 8.37 8.37 0 0 1-5.276-.197.77.77 0 0 0-.407-.054 4 4 0 0 0-.402.064c-.088.017-.189.037-.314.058-.288.049-.66.093-1.063.01-.422-.088-.819-.3-1.188-.67-.369-.369-.582-.766-.669-1.187-.083-.404-.04-.776.01-1.064.02-.125.04-.226.058-.314.029-.149.051-.263.063-.401a.77.77 0 0 0-.075-.46c-1.167-3.143-.288-6.747 2.184-9.156"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.864 14.814c-.159-.951.48-2.033 1.599-2.033l9.662.001c1.119 0 1.758 1.082 1.6 2.033-.547 3.271-3.171 5.849-6.43 5.851-3.262-.002-5.886-2.578-6.431-5.852m1.528-.483a.32.32 0 0 0-.049.236c.445 2.672 2.538 4.598 4.951 4.6 2.41-.003 4.505-1.93 4.951-4.599m-9.853-.237c.035-.049.062-.05.07-.05zm.07-.05 9.663.001c.008 0 .035.001.071.05a.32.32 0 0 1 .049.236m-9.782-.287"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.776 13a.75.75 0 0 1 1.037-.022l4.419 4.051a.75.75 0 0 1-1.014 1.106l-3.89-3.566-3.68 3.681a.75.75 0 1 1-1.061-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.297 12.781a.75.75 0 0 1 .749.75l-.004 6.166a.75.75 0 0 1-1.5-.001l.004-6.165a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLemonSliceOutline;
