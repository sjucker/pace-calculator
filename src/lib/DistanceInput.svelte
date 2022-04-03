<script lang="ts">
  import { unit } from "../stores";
  import { Unit } from "$lib/enums";

  export let distanceInMeters = 0;
  let distanceInCurrentUnit;

  unit.subscribe(value => {
    distanceInCurrentUnit = value === Unit.KILOMETER ?
      distanceInMeters / 1000 :
      distanceInMeters / 1609;
  });

  $: distanceInMeters = distanceInCurrentUnit * ($unit === Unit.KILOMETER ? 1000 : 1609);

</script>

Distance: <input type="number" bind:value={distanceInCurrentUnit} />{$unit}
