import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger6Bulk = ({
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
      d="M14.972 8.568c-.246.665-.63 1.221-1.215 1.624-.203.14-.424.243-.673.36l1.29.549c1.777.75 3.556 1.495 5.33 2.25 1.296.551 2.05 1.9 1.93 3.272-.14 1.583-1.352 2.735-2.698 2.927a3.5 3.5 0 0 1-.504.034H5.572c-1.92 0-3.381-1.632-3.197-3.584.123-1.306.79-2.23 1.965-2.75 1.674-.738 3.359-1.454 5.039-2.178a.97.97 0 0 1 1.311.518c.22.518-.018 1.095-.558 1.33q-1.816.785-3.633 1.566c-.47.202-.942.4-1.408.608-.526.235-.797.691-.77 1.27.024.547.34.983.83 1.156.14.049.282.066.428.066l12.86-.001c.606 0 1.109-.413 1.218-.988.118-.613-.18-1.18-.75-1.422q-3.605-1.523-7.21-3.042c-.439-.185-.655-.523-.659-1.006-.004-.464 0-.924.21-1.354.26-.533.665-.898 1.201-1.127.457-.196.699-.565.702-1.068.004-.488-.222-.852-.661-1.057-.74-.345-1.571.205-1.595 1.049-.012.46-.283.837-.691.965a.98.98 0 0 1-1.095-.384c-.207-.295-.2-.629-.154-.958.204-1.435 1.171-2.457 2.562-2.725 1.462-.282 2.971.636 3.431 2.087.005.015.02.025.032.038.175.66.187 1.317-.01 1.975z"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      d="M14.981 6.594c.175.659.187 1.317-.009 1.974l.413.002q.413.004.826.004 2.276.004 4.553 0c.67 0 1.12-.523 1.025-1.182-.072-.498-.5-.83-1.079-.83h-5.547l-.044-.003c-.048-.004-.098-.009-.138.035M4.671 8.576l.623-.001h2.059c.495-.003.878-.288.999-.733.18-.669-.286-1.273-1.013-1.278-1.089-.009-2.177-.007-3.266-.004l-.817.001c-.321.001-.61.097-.82.361-.255.324-.31.687-.14 1.066.174.39.495.578.905.584.49.008.98.006 1.47.004"
    />
  </Svg>
);
export default IconlystCoatHanger6Bulk;