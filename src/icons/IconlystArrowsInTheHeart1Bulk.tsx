import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart1Bulk = ({
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
      d="M21.846 7.297c-.642-1.585-1.88-2.741-3.486-3.257a5.86 5.86 0 0 0-2.744-.194c-.834.139-1.592.636-2.23 1.1-.615-.445-1.39-.949-2.228-1.091a5.9 5.9 0 0 0-1.905-.002c-.253.041-.309.361-.096.504l.035.024c.594.4.93 1.089.88 1.805l-.069.93a.3.3 0 0 0 .122.264l1.144.839a2 2 0 1 1-2.365 3.226l-1.107-.812A.3.3 0 0 0 7.5 10.6l-.83.358a1.922 1.922 0 0 1-1.629-.037c-.23-.108-.507.06-.46.309q.078.436.212.856c1.53 4.901 8.102 8.017 8.381 8.147a.5.5 0 0 0 .422 0c.107-.05 1.166-.554 2.508-1.439.143-.094.174-.29.092-.44a1.936 1.936 0 0 1-.136-1.545.33.33 0 0 0-.108-.375l-.203-.148a2 2 0 1 1 2.362-3.228l.159.116c.118.086.28.072.395-.017.176-.134.375-.243.6-.313a2 2 0 0 1 1.788.305c.17.125.427.096.519-.093.151-.313.287-.634.395-.965.52-1.616.476-3.318-.122-4.794"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.878 9.62a.5.5 0 0 0 .198-.04l1.51-.651 2.057 1.507a.748.748 0 0 0 1.047-.161.75.75 0 0 0-.16-1.048l-2.074-1.52.118-1.63a.5.5 0 0 0-.219-.451L5.65 3.806a.499.499 0 0 0-.779.379l-.138 1.889-1.76.769a.5.5 0 0 0-.08.873L5.6 9.536a.5.5 0 0 0 .28.085M21.433 17.266l-.536-2.377a.75.75 0 0 0-1.342-.27l-.488.685-1.693-1.238a.75.75 0 1 0-.886 1.211l1.708 1.25-.543.761a.75.75 0 0 0-.034.82.75.75 0 0 0 .734.361l2.438-.293c.053-.006.098-.033.148-.05.04-.014.081-.02.119-.04a.7.7 0 0 0 .188-.16c.019-.02.045-.029.062-.052q.002-.004.004-.009h.002c.006-.01.007-.023.013-.032a.7.7 0 0 0 .106-.247c.006-.025 0-.05.003-.076a.7.7 0 0 0-.003-.223c-.001-.007.002-.014 0-.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart1Bulk;
